"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const ViewCount = () => {
  const [userId, setUserId] = useState(1);
  const {
    data: pagedir,
    status: statusPagedir,
    isFetching: isFetchingPagedir,
    refetch: refetchPageDir,
  } = useQuery({
    queryKey: ["3-pagedir"],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`/api/pagedir-3`, {
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
    queryKey: ["3-appdirNode"],
    queryFn: async ({ signal }) => {
      const resp = await fetch(`3/api`, {
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
    queryKey: ["3-appdirEdge"],
    queryFn: async ({ signal }) => {
      // return {};
      const resp = await fetch(`3/api/edge`, {
        signal,
        headers: {
          "x-user-id": userId,
        },
      });
      const data = await resp.json();
      return data;
    },
  });

  useEffect(() => {
    if (userId > 1) {
      refetchPageDir();
      refetchAppDir();
      refetchAppDirEdge();
    }
  }, [userId]);

  return (
    <tr>
      <td>
        <button
          onClick={() => {
            setUserId((id) => id + 1);
          }}
        >
          refetch all (with x-user-id={userId + 1})
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
            iteration {pagedir?.current}
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
            iteration {appdirNode?.current}
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
            iteration {appdirEdge?.current}
          </span>
        )}
      </td>
    </tr>
  );
};
