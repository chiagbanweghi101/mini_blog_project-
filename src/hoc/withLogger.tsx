import { useEffect, type ComponentType } from 'react';

/**
 * Higher-Order Component that logs when the wrapped component
 * mounts and unmounts. Useful for debugging lifecycle behavior.
 */
export function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName?: string,
) {
  const displayName =
    componentName ??
    WrappedComponent.displayName ??
    WrappedComponent.name ??
    'Component';

  function ComponentWithLogger(props: P) {
    useEffect(() => {
      console.log(`[withLogger] ${displayName} mounted`);
      return () => {
        console.log(`[withLogger] ${displayName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  ComponentWithLogger.displayName = `withLogger(${displayName})`;

  return ComponentWithLogger;
}
