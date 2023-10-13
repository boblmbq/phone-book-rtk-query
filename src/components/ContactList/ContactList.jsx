import {
  useDeleteContactMutation,
  useGetAllContactsQuery,
} from 'redux/operation';

export const ContactList = () => {
  const [deleteContact] = useDeleteContactMutation();
  const { data, isFetching } = useGetAllContactsQuery();

  return (
    <ul>
      {isFetching === false &&
        data.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                onClick={async () => {
                  await deleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
