"use client";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export const ViewCount = () => {
  const {
    data: pagedir,
    status: statusPagedir,
    isFetching: isFetchingPagedir,
    refetch: refetchPageDir,
  } = useQuery({
    queryKey: ["2-pagedir"],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`/api/pagedir-2`, {
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
    refetch: refetchAppDir,
  } = useQuery({
    queryKey: ["appdirNode"],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`2/api?ts=${new Date().toISOString()}`, {
        signal,
      });
      const data = await resp.json();
      return data;
    },
  });

  const {
    data: appdirEdge,
    status: statusappdirEdge,
    isFetching: isFetchingappdirEdge,
    refetch: refetchAppDirEdge,
  } = useQuery({
    queryKey: ["appdirEdge"],
    queryFn: async ({ signal }) => {
      // return {};
      const resp = await fetch(`2/api/edge`, {
        signal,
      });
      const data = await resp.json();
      return data;
    },
  });

  return (
    <tr>
      <td>
        <button
          onClick={() => {
            refetchPageDir();
            refetchAppDir();
            refetchAppDirEdge();
          }}
        >
          refetch all
        </button>
      </td>
      <td>
        {isFetchingPagedir ? (
          "loading"
        ) : (
          <span
            style={
              {
                //   color: user.id != pagedir?.current && "red",
              }
            }
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
            style={
              {
                //   color: user.id != appdirNode?.current && "red",
              }
            }
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
            style={
              {
                //   color: user.id != appdirEdge?.current && "red",
              }
            }
          >
            {appdirEdge?.current}
          </span>
        )}
      </td>
    </tr>
  );
};
