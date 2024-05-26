import { unstable_noStore } from 'next/cache';
import Messages from '@/components/messages';

// export const revalidate =  5 // the same thing as using revalidate in fetch but more elegant
// export const dynamic = 'force-dynamic' // the same thing as cache: 'no-store'

export default async function MessagesPage() {
  //unstable_noStore() //the same thing as cache: 'no-store' but is recommended by next team after it exits unstable
  const response = await fetch('http://localhost:8080/messages', {
    // cache: 'no-store',
    // next: {
    //   revalidate: 5,
    // },
    headers: {
      'X-ID': 'page',
    },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
