async function askIsaac(question) {
  const res = await fetch("", {"https://resilient-ibis-227.convex.site/ask"
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  return await res.json();
}

// Testfunktion
async function test() {
  const svar = await askIsaac("Hvad er spænding?");
  console.log(svar);
}
