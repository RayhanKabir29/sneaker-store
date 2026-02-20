import Container from "@/components/layout/Container";
import { Suspense } from "react";

export default function Home() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
      <h2>Home Page</h2>
      </Suspense>
    </Container>
  );
}
