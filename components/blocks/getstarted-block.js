import { ScreenContainer } from 'components/docs/ScreenContainer'
import Article from 'components/docs/Article'
import { SiblingNav, SiblingNavLink } from 'components/docs/SiblingNav'

export default function GetStartedBlock({content}) {
  return (
    <ScreenContainer as="section" py={5}>
      <Article dangerouslySetInnerHTML={{ __html: content }} />
      <SiblingNav>
        <SiblingNavLink type="next" href="/docs/getting-started/">
          Read full documentation
        </SiblingNavLink>
      </SiblingNav>
    </ScreenContainer>
  )
}