import produce from "immer";
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
      {people.map((p, index) => {
        return (
          <div key={p.id}>
            <input
              value={p.firstName}
              placeholder={"first name"}
              onChange={(e) => {
                const firstName = e.target.value; // make sure that value is correct, since further it's closure
                setPeople((currentPerson) =>
                  produce(currentPerson, (v) => {
                    v[index].firstName = firstName;
                  })
                );
              }}
            />
            <input
              value={p.lastName}
              placeholder={"last name"}
              onChange={(e) => {
                const lastName = e.target.value;
                setPeople((currentPerson) =>
                  produce(currentPerson, (v) => {
                    v[index].lastName = lastName;
                  })
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WorkUnitForm;
