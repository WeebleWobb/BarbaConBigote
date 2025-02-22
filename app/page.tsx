import Container from '@/components/grid/container'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import Logo from '@/components/icons/logo'

const home = () => (
    <Container>
      <Row alignLg='middle' fullbasis>
        <Column className='pr-3 ' lg={6}>
          <div className='w-32 mb-4 sm:hidden'>
            <Logo />
          </div>
          <h1 className='font-bold text-grey text-6xl mb-2'>
            Barba con Bigote
          </h1>
          <h2 className='font-semibold text-grey text-3xl mb-6'>
            (Beard and Mustache)
          </h2>
          <h4 className='font-semibold text-brown text-2xl mb-2'>
            UI Designer at <a href="https://aweber.com" target="_blank" className='text-orange underline'>AWeber</a>
          </h4>
          <p className='mb-2'>Hola, I’m Juan D. Bolaños and I’m passionate about Human-Centric Design and Experiences. As a UI Designer I strive to utilize cognitive and social behaviors to better understand the human mind, its functions, and it’s affects in a given experience. </p>
          <p>My process is deeply rooted in empathy, research, and the user, allowing for objective understandings which helps design experiences that both support and enhance the user’s daily lives.</p>
        </Column>
        <Column className='pl-3' lg={6}>
          <img src="https://placehold.co/1600x1200" alt="Home image"/>
        </Column>
      </Row>
  </Container>
)

export default home;