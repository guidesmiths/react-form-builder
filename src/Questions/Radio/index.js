import ErrorMessage from '../../Fields/Error'
import Label from '../../Fields/Label'
import Radio from '../../Fields/Radio'

/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui'

const QuestionRadio = ({ question, register, errors }) => {
  return (
    <div>
      <Label key={question.name}>
        <Radio
          name={question.name}
          value={question.value}
          {...question.registerConfig}
          ref={register({
            ...question.registerConfig
          })}
        />
        {question.label}
      </Label>

      {errors[question.name] && errors[question.name].type === 'required' && (
        <ErrorMessage
          message={question.errorMessages && question.errorMessages.required}
        />
      )}
    </div>
  )
}

export default QuestionRadio
