export default function Home({ searchParams }: any) {
  console.log({ searchParams });
  return (
    <main>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </main>
  );
}
