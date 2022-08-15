if (true) {
  const foo = "foo"
  console.log(foo) // "foo"

  if (true) {
    const bar = "bar"
    console.log(foo) // "foo"

    if (true) {
      console.log(foo, bar) // "foo bar"
    }
  }
}
