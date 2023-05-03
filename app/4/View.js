"use client";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const ViewCount = ({ userId }) => {
  const {
    data: pagedir,
    status: statusPagedir,
    isFetching: isFetchingPagedir,
    refetch: refetchPageDir,
  } = useQuery({
    queryKey: ["4-pagedir", userId],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`/api/pagedir-4`, {
        signal,
        headers: {
          "x-user-id": userId,
        },
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
    queryKey: ["4-appdirNode", userId],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`4/api`, {
        signal,
        headers: {
          "x-user-id": userId,
        },
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
    queryKey: ["4-appdirEdge", userId],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`4/api/edge`, {
        signal,
        headers: {
          "x-user-id": userId,
        },
      });
      const data = await resp.json();
      return data;
    },
  });

  const queryClient = useQueryClient();

  return (
    <tr>
      <td>
        {userId === 0 ? (
          <button
            onClick={() => {
              queryClient.invalidateQueries([]);
            }}
          >
            refetch all queries
          </button>
        ) : (
          `id: ${userId}`
        )}
      </td>
      <td>
        {isFetchingPagedir ? (
          "loading"
        ) : (
          <span
            style={
              {
                //   color: user.id != pagedir && "red",
              }
            }
          >
            result {JSON.stringify(pagedir)}
          </span>
        )}
      </td>
      <td>
        {isFetchingappdirNode ? (
          "loading"
        ) : (
          <span>result {JSON.stringify(appdirNode)}</span>
        )}
      </td>
      <td>
        {isFetchingappdirEdge ? (
          "loading"
        ) : (
          <span>result {JSON.stringify(appdirEdge)}</span>
        )}
      </td>
    </tr>
  );
};
