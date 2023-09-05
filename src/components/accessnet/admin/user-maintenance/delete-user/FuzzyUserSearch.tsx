'use client';

import { User } from '@prisma/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FuzzyUserSearch() {
  const [searchVal, setSearchVal] = useState<
    string | number | readonly string[] | undefined
  >('');
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, SetSearchResults] = useState<User | undefined>();

  useEffect(() => {
    if (searchVal === undefined || searchVal === '') {
      return;
    }
    setLoading(true);

    const timer = setTimeout(() => {
      fetch('/api/users/find-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: searchVal.toString(),
        }),
      })
        .then((res) => res.json())
        .then((x) => {
          if (x.found === undefined) {
            SetSearchResults(undefined);
            setLoading(false);
            return;
          } else {
            console.log(x.found);
            SetSearchResults(x.found);
            setLoading(false);
          }
        });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchVal]);

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <input
        type="email"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        id="user"
      />
      {loading ? (
        <div>loading</div>
      ) : searchResults === undefined ? (
        <div>NOPE</div>
      ) : (
        <Link
          href={`./change-permissions/${searchResults.id}`}
          className="hover:bg-blue-500 p-2 rounded-2xl"
        >
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl shadow-2xl glass bg-secondary">
            <div>{`${searchResults.email}`}</div>
            {/* @ts-expect-error */}
            <img src={searchResults.image} />
            <div>{searchResults.name}</div>
          </div>
        </Link>
      )}
    </div>
  );
}
