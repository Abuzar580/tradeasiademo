import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h5>ChemTradeAsia</h5>
        <p className="body-regular mt-4">React storefront</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="primary" href="#">
            Primary
          </Button>
          <Button variant="outlined" href="#">
            Outlined
          </Button>
          <Button variant="signIn" href="/sign-in">
            Sign In
          </Button>
        </div>
      </main>
    </div>
  );
}
