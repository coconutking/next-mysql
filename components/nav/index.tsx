import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client';
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'

export default function Nav({ title = 'Home' }) {
  const [session, loading] = useSession();
  var button;
  if (session) {
    button = <button className="btn btn-secondary" onClick={signOut}>Logout</button>;
  } else {
    button = <button className="btn btn-primary" onClick={signIn}>Login</button>;
  }
  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          <div className="flex justify-end">
            <ButtonLink href="/new">New Entry</ButtonLink>
            {button}
          </div>
        </div>
      </nav>
    </Container>
  )
}
