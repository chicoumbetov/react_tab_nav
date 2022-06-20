import { useState } from "react";

interface Person {
  id: string;
  firstName: string;
  lastName: string;
}

const WorkUnitForm = () => {
  const [people, setPeople] = useState<Person[]>([
    { id: "5", firstName: "one", lastName: "two" },
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      {people.map((p) => {
        return (
          <div key={p.id}>
            <input
              value={p.firstName}
              placeholder={"first name"}
              onChange={(e) => {
                const firstName = e.target.value; // make sure that value is correct, since further it's closure
                setPeople((currentPerson) =>
                  currentPerson.map((x) =>
                    x.id === p.id
                      ? {
                          ...x,
                          firstName,
                        }
                      : x
                  )
                );
                //e.target.value
              }}
            />
            <input value={p.lastName} placeholder={"last name"} />
          </div>
        );
      })}
    </div>
  );
};

export default WorkUnitForm;
