import React from "react";
import { Radio, Label } from "flowbite-react";

const CardSoal = () => {
  return (
    <>
      <div className="mb-5 p-5 shadow-xl rounded-lg shadow-blue-50 bg-white">
        <h1 className="font-bold mb-2">Soal 1</h1>

        <fieldset className="flex flex-col gap-2" id="radio">
          <legend>
            <p className="mb-3">
              Adipisicing duis dolore consectetur nulla id adipisicing fugiat
              veniam pariatur. Mollit elit irure ipsum ipsum consectetur Lorem
              consequat excepteur consectetur magna est deserunt id. Adipisicing
              quis id labore do enim ex commodo dolor. Exercitation tempor ad
              excepteur ipsum anim proident. Et ut velit pariatur cupidatat.
            </p>
          </legend>
          <div className="flex items-center gap-2">
            <Radio
              id="united-state"
              name="countries"
              value="USA"
              defaultChecked={true}
            />
            <Label htmlFor="united-state">United States</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="germany">Germany</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="spain" name="countries" value="Spain" />
            <Label htmlFor="spain">Spain</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="uk" name="countries" value="United Kingdom" />
            <Label htmlFor="uk">United Kingdom</Label>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default CardSoal;
