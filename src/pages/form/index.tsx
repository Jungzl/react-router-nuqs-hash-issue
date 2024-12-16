import { parseAsString, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { Link } from 'react-router'

const Index = () => {
  const [formValues, setFormValues] = useQueryStates(
    {
      keyword: parseAsString.withDefault(''),
    },
    { history: 'replace' }
  )
  const [keyword, setKeyword] = useState<string>(formValues.keyword)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const keyword = formData.get('keyword')
    setFormValues({ keyword: keyword as string })
  }

  return (
    <>
      <h1>form</h1>
      <Link to="/">back to home</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" name="keyword" value={keyword} onChange={e => setKeyword(e.target.value)} />
        <button type="submit">search</button>
      </form>
    </>
  )
}

export default Index
