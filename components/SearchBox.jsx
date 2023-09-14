'use client';

import { Combobox } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useIsClient } from '@/lib/hooks';
import { useDebounce } from 'use-debounce';

export default function SearchBox() {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 300);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (debouncedQuery.length > 1) {
        const controller = new AbortController();
      (async () => {
        const url ='/api/search?query='
    + encodeURIComponent(debouncedQuery)
        const response = await fetch(url, {signal: controller.signal});
        const reviews = await response.json();
        setReviews(reviews);
      })();
      return () => controller.abort();
    } else {
      setReviews([]);
    }
  }, [debouncedQuery]);

  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };

  console.log('[SearchBox] query:', query, debouncedQuery);
  if (!isClient) {
    return null;
  }
    return (
        <div className='w-48 relative'>
            <Combobox onChange={handleChange}>
                <Combobox.Input placeholder="Search" 
                    value={query} onChange={(event) => setQuery(event.target.value)}
                    className="border p-2 rounded"
                />
                    <Combobox.Options className="absolute bg-white bg-opacity-50 py-1 w-full">
                        {reviews.map((review) => (
                            <Combobox.Option key={review.slug} value={review}>
                             {({ active }) => (
                                <span className={`block px-2 truncate w-full ${
                                    active ? 'bg-white bg-opacity-25' : ''  
                                }` }>
                                    {review.title}
                                </span>
                             )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
            </Combobox>
        </div>
    );
}
