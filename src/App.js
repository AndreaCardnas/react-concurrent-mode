import React, { SuspenseList, Suspense, useState, useTransition } from 'react';
import { Container, Row, Col, Button } from 'shards-react';
import fetchResource from './resource';

// async components
const ProfileDetails = React.lazy(() => import('./components/ProfileDetails'));
const Posts = React.lazy(() => import('./components/Posts'));

// resource to fetching data
const initialResource = fetchResource();

export default function App() {
  const [resource, setResource] = useState(initialResource);
  const [startTransition, isPending] = useTransition({ timeoutMs: 1500 });

  const handleRefreshClick = () => {
    startTransition(() => {
      const { id } = resource.user.read();
      const nextUserId = Math.max(1, (id + 1) % 11);
      setResource(fetchResource(nextUserId));
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={{ size: 10, order: 1, offset: 1 }}>
          <SuspenseList revealOrder="forwards" tail="collapsed">
            <Suspense fallback={<span>Loading user profile...</span>}>
              <ProfileDetails resource={resource} />
            </Suspense>
            <Suspense fallback={<span>Loading post...</span>}>
              <Posts resource={resource} />
            </Suspense>
            <br />
            <Button block disabled={isPending} onClick={handleRefreshClick}>
              {(isPending && 'Fetching next profile') || 'Next profile'}
            </Button>
          </SuspenseList>
        </Col>
      </Row>
    </Container>
  );
}
