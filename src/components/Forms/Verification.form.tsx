import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { useStyletron } from "baseui";
import { StyledInput } from "..";
import { StyledParagraphText, StyledButton } from "..";
import Tooltip from "../Tooltip/Tooltip";
import questionMark from "../../assets/question_mark.svg";
type Props = {};

const VerificationForm = (props: Props) => {
  const [css, theme] = useStyletron();
  return (
    <FormWrapper style={{ width: "70%", maxWidth: "370px", minWidth: "350px" }}>
      <div>
        <StyledParagraphText
          weight={400}
          size="13px"
          className={css({
            lineHeight: "18px",
            marginBottom: "30px",
            letterSpacing: 0,
            color: theme.colors.primary,
          })}
        >
          In order to register for online access, we need to verify your
          identity. Please enter the following information exactly as it appears
          on your last DRS statement, proxy or certificate:
        </StyledParagraphText>
        <StyledInput type="text" placeholder="Your Name (Registration)" />
        <StyledInput type="text" placeholder="Postal/Zip Code (optional)" />

        <StyledParagraphText
          size="15px"
          weight={500}
          className={css({
            lineHeight: "19px",
            marginBottom: "20px",
            color: theme.colors.primary,
            letterSpacing: 0,
            margin: "30px 0 10px",
          })}
        >
          Enter at least two of the following:
        </StyledParagraphText>
        <div
          className={css({
            position: "relative",
            width: "100%",
            height: "fit-content",
          })}
        >
          <StyledInput
            type="text"
            placeholder="Holder ID"
            style={{ paddingRight: 35 }}
          />
          <img
            src={questionMark}
            className={css({
              position: "absolute",
              width: "15px",
              height: "15px",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              ":hover + div": {
                opacity: 1,
                zIndex: 1,
              },
            })}
          />
          <Tooltip />
        </div>
        <StyledInput type="text" placeholder="Email Address" />
        <StyledInput type="text" placeholder="SIN or TIN" />
        <StyledButton top="30px">SUBMIT</StyledButton>
      </div>
    </FormWrapper>
  );
};

export default VerificationForm;
