import React from "react"
import { Steper } from "~core"
import { SelectBase } from "../selectBase"
import { SelectIngredients } from "../selectIngredients.tsx"
import { SelectName } from "../selectName"

function Create() {
  const onFormSubmit = () => {}
  const step2Validator = () => {
    return false
  }
  const step3Validator = () => {
    return true
  }
  return (
    <div>
      <Steper
        startingStep={0}
        onSubmit={onFormSubmit}
        steps={[
          {
            label: "Base type",
            name: "step 1",
            content: SelectBase,
          },
          {
            label: "Add ingredients",
            name: "step 2",
            content: SelectIngredients,
            validator: step2Validator,
          },
          {
            label: "Name your pizza",
            name: "step 3",
            content: SelectName,
            validator: step3Validator,
          },
        ]}
      />
    </div>
  )
}

export { Create }
