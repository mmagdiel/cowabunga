import * as React from "react"
import {
  ProgressStep,
  ReducerAction,
  StepProgressProps,
  StepStates,
} from "./data"
import * as styles from "./styles.module.css"

function stepsReducer(
  steps: ProgressStep[],
  action: ReducerAction
): ProgressStep[] {
  return steps.map(function (step, i) {
    if (i < action.payload.index) {
      step.state = StepStates.COMPLETED
    } else if (i === action.payload.index) {
      step.state = action.payload.state
    } else {
      step.state = StepStates.NOT_STARTED
    }
    return step
  })
}

function Steper(props: StepProgressProps): JSX.Element {
  const {
    steps,
    startingStep,
    wrapperClass,
    progressClass,
    stepClass,
    labelClass,
    subtitleClass,
    contentClass,
    buttonWrapperClass,
    primaryBtnClass,
    secondaryBtnClass,
    submitBtnName,
    onSubmit,
    previousBtnName,
    nextBtnName,
  } = props
  const [state, dispatch] = React.useReducer(stepsReducer, steps)
  const [currentIndex, setCurrentIndex] = React.useState(startingStep)

  React.useEffect(function () {
    dispatch({
      type: "init",
      payload: { index: currentIndex, state: StepStates.CURRENT },
    })
  }, [])

  function submitHandler(): void {
    onSubmit()
  }

  function nextHandler(): void {
    if (currentIndex === steps.length - 1) {
      return
    }
    let isStateValid = true
    const stepValidator = state[currentIndex].validator

    if (stepValidator) {
      isStateValid = stepValidator()
    }
    dispatch({
      type: "next",
      payload: {
        index: isStateValid ? currentIndex + 1 : currentIndex,
        state: isStateValid ? StepStates.CURRENT : StepStates.ERROR,
      },
    })

    if (isStateValid) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function prevHandler(): void {
    if (currentIndex === 0) {
      return
    }

    dispatch({
      type: "previous",
      payload: {
        index: currentIndex - 1,
        state: StepStates.CURRENT,
      },
    })
    setCurrentIndex(currentIndex - 1)
  }
  const content = props.steps[currentIndex]?.content
  return (
    <div className={`${styles["progress_bar_wrapper"]} ${wrapperClass || ""}`}>
      <ul className={`${styles["step_progress_bar"]} ${progressClass || ""}`}>
        {state.map(function (step, i) {
          return (
            <li
              key={i}
              className={`${styles["progress_step"]}${
                step.state === StepStates.COMPLETED
                  ? ` ${styles.completed}`
                  : ""
              }${
                step.state === StepStates.CURRENT ? ` ${styles.current}` : ""
              }${
                step.state === StepStates.ERROR ? ` ${styles["has_error"]}` : ""
              } ${stepClass || ""}`}
            >
              {step.state === StepStates.COMPLETED && (
                <span className={styles["step_icon"]}>
                  <svg
                    width="1.5rem"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3.5L4.5 7.5L12 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              )}
              {step.state === StepStates.ERROR && (
                <span className={styles["step_icon"]}>!</span>
              )}
              {step.state !== StepStates.COMPLETED &&
                step.state !== StepStates.ERROR && (
                  <span className={styles["step_index"]}>{i + 1}</span>
                )}
              <div className={`${styles["step_label"]} ${labelClass || ""}`}>
                {step.label}
                {step.subtitle && (
                  <div
                    className={`${styles["step_label_subtitle"]} ${
                      subtitleClass || ""
                    }`}
                  >
                    {step.subtitle}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      <div className={`${styles["step_content"]} ${contentClass || ""}`}>
        {content && content()}
      </div>

      <div className={`${styles["step_buttons"]} ${buttonWrapperClass || ""}`}>
        <a
          className={`${styles["step_action_btn"]} ${
            styles["action_btn_secondary"]
          } ${currentIndex === 0 ? styles.disabled : ""} ${
            secondaryBtnClass || ""
          }`}
          onClick={prevHandler}
        >
          {previousBtnName ? previousBtnName : "Previous"}
        </a>
        {currentIndex === state.length - 1 ? (
          <a
            className={`${styles["step_action_btn"]} ${
              styles["action_btn_primary"]
            } ${primaryBtnClass || ""}`}
            onClick={submitHandler}
          >
            {submitBtnName || "Submit"}
          </a>
        ) : (
          <a
            className={`${styles["step_action_btn"]} ${
              styles["action_btn_primary"]
            } ${primaryBtnClass || ""}`}
            onClick={nextHandler}
          >
            {nextBtnName ? nextBtnName : "Next"}
          </a>
        )}
      </div>
    </div>
  )
}

export { Steper }
