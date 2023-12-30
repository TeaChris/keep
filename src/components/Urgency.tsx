interface Props {
  urgencies: { label: string; value: string }[]
  categories: { label: string; value: string }[]
}

export const Urgency = ({ urgencies, categories }: Props) => {
  return (
    <>
      <FormSelect options={...urgencies} id="urgency" />
      <FormSelect options={...categories} id="urgency" />
    </>
  )
}
