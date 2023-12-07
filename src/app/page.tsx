import { GithubProfile } from "@/components/github-profile";
import { LongWaitComponent } from "@/components/long-wait-component";
import { Suspense } from "react";

export default async function Home() {

  return (
    <div>
      <h1>Home</h1>

      <p>
        texto texto texto texto texto texto texto texto texto texto texto texto
      </p>

      <Suspense fallback={<p>Carregando Long Wait Component</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
