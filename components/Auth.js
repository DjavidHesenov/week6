import { Auth, Typography, Button } from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'
import signIn from '../utils/signIn'

const Container = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export default function AuthBasic() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth supabaseClient={supabase} />
        <Button onClick={() => signIn(supabase)}> Login with Google </Button>
      </Container>
    </Auth.UserContextProvider>
  )
}