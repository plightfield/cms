import React, { useEffect, useMemo, useRef } from "react";
import { useRequest } from "ahooks";
import { render as ejsRender } from "ejs";
import Spinner from "react-bootstrap/Spinner";
import { testRequestCompo } from "./RequestCompoInterface";

/**
 * render a component from template and script data
 *
 * @returns
 */
function ComponentRender() {
  const { data, loading } = useRequest(() => testRequestCompo);
  const evalTime = useRef(0);
  const template = useMemo(
    () => ejsRender(data?.template || "", data?.config || {}),
    [data]
  );

  useEffect(() => {
    if (data?.script && evalTime.current <= 0) {
      try {
        eval(ejsRender(data?.script || "", data?.config || {}));
        evalTime.current = 1;
      } catch (err) {
        console.warn(err);
      }
    }
  }, [data]);

  return loading ? (
    <Spinner animation='border' variant='primary' />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: template }}></div>
  );
}

export default ComponentRender;
