import { Form, FormInput, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;

    onSubmit(query);
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput type="text" name="query" />
      <Button type="submit">Search</Button>
    </Form>
  );
};
