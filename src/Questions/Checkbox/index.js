/** @jsx jsx */
/** @jsxRuntime classic */
import { Link, jsx } from 'theme-ui'

import Checkbox from '../../Fields/Checkbox'
import ErrorMessage from '../../Fields/Error'
import Label from '../../Fields/Label'

import ReactMarkdown from 'react-markdown'

const styles = {
  fullWidth: {
    gridColumnStart: '1',
    gridColumnEnd: '3'
  },
  selectOption: {
    background: 'bg',
    color: 'black'
  },
  markDown: {
    fontFamily: 'regular',
    width: ['90%', '95%', '95%'],
    p: {
      margin: 0
    },
    a: {
      color: '#31b112'
    }
  }
}

const QuestionCheckbox = ({
  question,
  errors,
  form,
  currentPath,
  register
}) => {
  return (
    <div
      sx={{
        ...(question.isFullWidth && styles.fullWidth)
      }}
    >
      <div
        sx={{
          variant: 'forms.checkbox.' + (form && form.layout)
        }}
      >
        <div sx={styles.centerStyle} key={question.name}>
          <Label sx={styles.centerStyle}>
            <Checkbox
              sx={styles.checkboxMinWidth}
              name={question.name}
              {...question.registerConfig}
              ref={register({
                ...question.registerConfig
              })}
            />
            <ReactMarkdown
              sx={styles.markDown}
              source={question.label}
              renderers={{
                link: ({ href, children }) => (
                  <Link href={`${currentPath}${href}`} target='_blank'>
                    {children}
                  </Link>
                )
              }}
            />
          </Label>
          {errors[question.name] &&
            errors[question.name].type === 'required' && (
              <ErrorMessage
                message={
                  question.errorMessages && question.errorMessages.required
                }
              />
            )}
        </div>
      </div>
    </div>
  )
}

export default QuestionCheckbox
