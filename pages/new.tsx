import Nav from '@/components/nav'
import Container from '@/components/container'
import EntryForm from '@/components/entry-form'
import Unauthorized from '@/components/unauthorized'
import { useSession } from 'next-auth/client';

export default function NewEntryPage() {
  const [session, loading] = useSession();

  var content = session ? <EntryForm /> : <Unauthorized></Unauthorized>
  
  return (
    <>
      <Nav title="New" />
      <Container className="w-full lg:w-2/4">
        {content}
      </Container>
    </>
  )
}
