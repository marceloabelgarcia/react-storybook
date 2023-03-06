import React from 'react';
import { useLocation } from 'react-router-dom';

function useRouteTransitions(params) {
  const location = useLocation();

  const [loading, setLoading] = React.useState(false);
  const [loadingOutlet, setLoadingOutlet] = React.useState(false);

  const [displayLocation, setDisplayLocation] = React.useState(location);
  const [transitionStageLevel1, setTransistionStageLevel1] = React.useState('');
  const [transitionStageLevel2, setTransistionStageLevel2] = React.useState('fadeIn');

  const pathToArray = (pathname) => {
    return pathname.split('/').slice(1);
  };
  // get level layout transition, main route or nested route were changed
  const getLevelRoute = (pathnameFrom) => {
    const locationArray = pathToArray(pathnameFrom);
    const displayLocationArray = pathToArray(displayLocation.pathname);

    const n = locationArray.length && displayLocationArray.length;
    let localLevel = 1;
    for (let i = 0; i < n; i++) {
      if (locationArray[i] === displayLocationArray[i]) {
        localLevel++;
      }
    }
    return localLevel;
  };
  // dispatch animation, layout main or outlet
  const setTransitionStage = (localLevel, stage) => {
    if (localLevel === 1) {
      setTransistionStageLevel1(stage);
    }
    if (localLevel > 1) {
      setTransistionStageLevel2(stage);
    }
  };
  // on detect route change
  React.useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      const localLevel = getLevelRoute(location.pathname);

      setTransitionStage(localLevel, 'fadeOut');
    }
  }, [location]);

  // to continue fadeIn animation
  const fadeIn = (loc) => {
    setLoading(false);
    setLoadingOutlet(false);
    const localLevel = getLevelRoute(loc.pathname);
    setTransitionStage(localLevel, 'fadeIn');
  };
  // when on fadeOut it ends, transition stop until fadeIn()
  const stopped = (loc) => {
    if (params.stopped) {
      params.stopped({ fadeIn, location: loc });
    }
  };
  // on mounted
  React.useEffect(() => {
    setLoading(true);
    stopped({ pathname: '' });
  }, []);
  // on animation end
  const onAnimationEnd = (props) => {
    if (props.stage === 'fadeOut') {
      setDisplayLocation(location);

      if (props.level === 1) {
        setLoading(true);
      }
      if (props.level === 2) {
        setLoadingOutlet(true);
      }
      stopped(location);
    }
  };
  return {
    displayLocation,
    transitionStageLevel1,
    transitionStageLevel2,
    location,
    fadeIn,
    onAnimationEnd,
    loading,
    loadingOutlet
  };
}

export default useRouteTransitions;
