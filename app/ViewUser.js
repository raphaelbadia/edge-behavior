"use client";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export const ViewUser = ({ user }) => {
  const {
    data: pagedir,
    status: statusPagedir,
    isFetching: isFetchingPagedir,
  } = useQuery({
    queryKey: ["pagedir", user.id],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`/api/pagedir?userId=${user.id}`, {
        signal,
      });
      const data = await resp.json();
      return data;
    },
  });

  const {
    data: appdirNode,
    status: statusappdirNode,
    isFetching: isFetchingappdirNode,
  } = useQuery({
    queryKey: ["appdirNode", user.id],
    queryFn: async ({ signal }) => {
      return {};
      // const resp = await fetch(`/api/appdir?userId=${user.id}`, {
      //   signal,
      // });
      // const data = await resp.json();
      // return data;
    },
  });

  const {
    data: appdirEdge,
    status: statusappdirEdge,
    isFetching: isFetchingappdirEdge,
  } = useQuery({
    queryKey: ["appdirEdge", user.id],
    queryFn: async ({ signal }) => {
      return {};
      // const resp = await fetch(`/api/appdir?userId=${user.id}`, {
      //   signal,
      // });
      // const data = await resp.json();
      // return data;
    },
  });

  return (
    <tr>
      <td>{user.id}</td>
      <td>
        {isFetchingPagedir ? (
          "loading"
        ) : (
          <span
            style={{
              color: user.id != pagedir?.current && "red",
            }}
          >
            {pagedir?.current}
          </span>
        )}
      </td>
      <td>
        {isFetchingappdirNode ? (
          "loading"
        ) : (
          <span
            style={{
              color: user.id != appdirNode?.current && "red",
            }}
          >
            {appdirNode?.current}
          </span>
        )}
      </td>
      <td>
        {isFetchingappdirEdge ? (
          "loading"
        ) : (
          <span
            style={{
              color: user.id != appdirEdge?.current && "red",
            }}
          >
            {appdirEdge?.current}
          </span>
        )}
      </td>
    </tr>
  );
};
