import React from 'react'
import { Button, Container } from 'components/ui'

export default function Home() {
  return (
    <>
      <main
        style={{
          paddingTop: 'var(--space-xl)',
        }}
      >
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-sm)',
          }}
        >
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem
            quaerat, culpa ea est, amet distinctio qui, excepturi veniam
            architecto voluptates expedita voluptatem cum sed unde. Quisquam
            necessitatibus voluptatibus vel!
          </p>
          <a href="https://google.com/">Lorem ipsum...</a>
          <div>
            <Button>Button</Button>
          </div>
        </Container>
      </main>
    </>
  )
}
