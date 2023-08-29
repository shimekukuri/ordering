'use client';

import { useEffect, useState } from 'react';

export default function FuzzyUserSearch() {
  const [searchVal, setSearchVal] = useState<
    string | number | readonly string[] | undefined
  >('');
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, SetSearchResults] = useState<[]>([]);

  useEffect(() => {
    if (searchVal === undefined || searchVal === '') {
      return;
    }
    setLoading(true);

    const timer = setTimeout(() => {
      fetch('api/find-items/departments/dme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tags: searchVal.toString().split(' '),
        }),
      })
        .then((res) => res.json())
        .then((x) => {
          if (x === undefined) {
            setLoading(false);
            return;
          } else {
            SetSearchResults(x.items);
            setLoading(false);
          }
        });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchVal]);

  return (
    <div>
      <input
        type="email"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        id="user"
      />
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          {searchResults.map(() => (
            <div>f</div>
          ))}
        </div>
      )}
    </div>
  );
}
