import { pressed } from '@anchor-protocol/styled-neumorphism';
import { TextField, TextFieldProps } from '@material-ui/core';
import { ComponentType } from 'react';
import styled from 'styled-components';

/**
 * Styled component of the `<TextField/>` of the Material-UI
 *
 * @see https://material-ui.com/api/text-field/
 */
export const TextInput: ComponentType<TextFieldProps> = styled(TextField)`
  border-radius: 5px;

  ${({ theme }) =>
    pressed({
      color: theme.textInput.backgroundColor,
      backgroundColor: theme.backgroundColor,
      distance: 1,
      intensity: theme.intensity * 2,
    })};

  .MuiFormLabel-root {
    opacity: 1;
    color: ${({ theme }) => theme.formControl.labelColor};
  }

  .MuiFormLabel-root.Mui-focused {
    opacity: 1;
    color: ${({ theme }) => theme.formControl.labelFocusedColor};
  }

  .MuiFormLabel-root.Mui-error {
    color: ${({ theme }) => theme.formControl.labelErrorColor};
  }

  .MuiInputLabel-formControl {
    transform: translate(20px, 22px) scale(1);
  }

  .MuiInputLabel-shrink {
    transform: translate(20px, 12px) scale(0.7);
  }
  
  .MuiInputLabel-shrink + .MuiInputBase-root {
    .MuiInputBase-input {
      transform: translateY(8px);
    }
  }

  .MuiInput-root {
    margin: 14px 20px;
    color: ${({ theme }) => theme.textInput.textColor};
  }

  .MuiInput-root.Mui-error {
    color: ${({ theme }) => theme.formControl.labelErrorColor};
  }

  .MuiInput-underline:before,
  .MuiInput-underline:after {
    display: none;
  }
  
  .MuiFormHelperText-root {
    position: absolute;
    right: 20px;
    bottom: -20px;
  }
` as any;