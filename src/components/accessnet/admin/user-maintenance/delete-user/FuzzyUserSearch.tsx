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
    <div className="flex justify-center items-center flex-col">
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
          className="hover:bg-blue-500"
        >
          <div className="">
            <div>{`${searchResults.email}`}</div>
            <div>{searchResults.id}</div>
            <div>{searchResults.image}</div>
            <div>{searchResults.name}</div>
          </div>
        </Link>
      )}
    </div>
  );
}
