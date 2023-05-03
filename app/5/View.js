"use client";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export const ViewCount = ({ id }) => {
  const {
    data: pagedir,
    status: statusPagedir,
    isFetching: isFetchingPagedir,
    refetch: refetchPageDir,
  } = useQuery({
    queryKey: ["5-pagedir", id],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`/api/pagedir-5`, {
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
    queryKey: ["5-appdirNode", id],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`5/api?ts=${new Date().toISOString()}`, {
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
    queryKey: ["5-appdirEdge", id],
    queryFn: async ({ signal }) => {
      // return {};
      const resp = await fetch(`5/api/edge`, {
        signal,
      });
      const data = await resp.json();
      return data;
    },
  });

  return (
    <tr>
      <td>{id}</td>
      <td>
        {isFetchingPagedir ? (
          "loading"
        ) : (
          <pre>{JSON.stringify(pagedir, null, 2)}</pre>
        )}
      </td>
      <td>
        {isFetchingappdirNode ? (
          "loading"
        ) : (
          <pre>{JSON.stringify(appdirNode, null, 2)}</pre>
        )}
      </td>
      <td>
        {isFetchingappdirEdge ? (
          "loading"
        ) : (
          <pre>{JSON.stringify(appdirEdge, null, 2)}</pre>
        )}
      </td>
    </tr>
  );
};
