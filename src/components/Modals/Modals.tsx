import React from "react";
import { ModalWrapper, Overlay } from "./Modals.style";
import { useStyletron } from "baseui";
import formLogo from "../../assets/form_logo.svg";
import { ArrowForward, ArrowBack } from "../svgs/arrows";
import {
  StyledParagraphText,
  StyledButton,
  StyledDarkParagraphText,
  addSpace,
  StyledHeaderText,
  StyledDateInput,
} from "../index";
type Props = {
  children: React.ReactNode;
  showCloseIcon?: boolean;
  small?: boolean;
  large?: boolean;
};

export const BaseModal = ({ children, showCloseIcon, small, large }: Props) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(14, 41, 75, 0.9)",
        zIndex: 20,
      })}
    >
      <ModalWrapper small={!!small} large={!!large}>
        {showCloseIcon && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css({
              position: "absolute",
              top: "15px",
              right: "15px",
              cursor: "pointer",
              opacity: 0.8,
              ":hover": {
                opacity: 1,
              },
            })}
          >
            <path
              d="M11 1L1 11"
              stroke="#9B2C21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L11 11"
              stroke="#9B2C21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        <img src={formLogo} />
        {children}
      </ModalWrapper>
    </div>
  );
};

export const ReviewInfoModal = () => {
  const [css] = useStyletron();
  return (
    <BaseModal>
      <StyledParagraphText
        style={{
          color: "rgba(14, 41, 75, 1)",
          fontWeight: 600,
          fontSize: "20px",
          letterSpacing: ".5px",
          lineHeight: 1.5,
        }}
      >
        Please review the information you have provided for accuracy:
      </StyledParagraphText>
      <div style={{ width: "100%" }}>
        {[1, 2, 3, 4].map((i) => {
          return (
            <div
              className={css({
                textAlign: "left",
                width: "100%",
                marginTop: "10px",
                padding: "15px 0",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "18px",
                color: "#000",
                ":not(:last-child)": {
                  borderBottom: "1px solid rgba(209, 208, 208, 1)",
                },
              })}
            >
              FullName: <span style={{ fontWeight: 500 }}>John Doe</span>
            </div>
          );
        })}
      </div>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "10px",
        })}
      >
        <StyledButton
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flex: 1,
            backgroundColor: "transparent",
            color: "rgba(14, 41, 75, 1)",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          <ArrowBack fill="#0E294B" className={css({ margin: "0 10px" })} />
          Revise
        </StyledButton>
        <StyledButton
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 2,
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Verify and Register
          <ArrowForward className={css({ margin: "0 10px" })} />
        </StyledButton>
      </div>
    </BaseModal>
  );
};

export const ClientVerificationFailedModal = () => {
  const [css] = useStyletron();
  return (
    <BaseModal showCloseIcon>
      <StyledDarkParagraphText
        weight={600}
        style={{
          fontSize: "18px",
          letterSpacing: ".5px",
          lineHeight: 1.5,
          marginTop: "50px",
        }}
        align="center"
      >
        We were unable to verify your information. Please click Go Back to try
        again.
      </StyledDarkParagraphText>
      <StyledDarkParagraphText weight={600}>Reason:</StyledDarkParagraphText>
      <StyledDarkParagraphText
        weight={400}
        center
        style={{
          marginBottom: "50px",
        }}
      >
        Postal/Zip code provided does not match your registered address.
      </StyledDarkParagraphText>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "10px",
        })}
      >
        <StyledButton
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 2,
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          <ArrowBack className={css({ margin: "0 20px" })} />
          Go Back
        </StyledButton>
      </div>
    </BaseModal>
  );
};

export const DRSNotFoundModal = () => {
  const [css] = useStyletron();
  return (
    <BaseModal showCloseIcon>
      <StyledDarkParagraphText
        weight={500}
        style={{
          fontSize: "18px",
          letterSpacing: "0.4px",
          lineHeight: 1.5,
          marginTop: "50px",
        }}
        align="center"
      >
        We’re sorry. The information you entered does not match our records.
        Please review and re-enter the information to try again.
      </StyledDarkParagraphText>
      {addSpace()}
      <StyledButton
        small
        style={{
          padding: "0 50px",
        }}
      >
        re-enter details
      </StyledButton>
    </BaseModal>
  );
};

export const CertificateNotFoundModal = () => <DRSNotFoundModal />;
export const MaxAttemptModal = () => {
  const [css] = useStyletron();
  return (
    <BaseModal showCloseIcon>
      <StyledDarkParagraphText
        weight={600}
        style={{
          fontSize: "18px",
          letterSpacing: ".5px",
          lineHeight: 1.5,
          marginTop: "50px",
        }}
        align="center"
      >
        You have reached the maximum number attempts to verify your account
        information.
      </StyledDarkParagraphText>
      <StyledDarkParagraphText weight={600}>
        Please <span className={css({ color: "#B4873F" })}>contact us</span> for
        support.
      </StyledDarkParagraphText>
    </BaseModal>
  );
};

export const BrokerVerificationFailedModal = () => {
  const [css] = useStyletron();
  return (
    <BaseModal showCloseIcon>
      <StyledDarkParagraphText
        weight={500}
        style={{
          fontSize: "18px",
          letterSpacing: "0.4px",
          lineHeight: 1.5,
          marginTop: "50px",
        }}
        align="center"
      >
        Please go back to the previous screen to confirm that you entered the
        information correctly as provided by us or{" "}
        <span style={{ color: "rgba(180, 135, 63, 1)" }}>contact us</span> for
        assistance.
      </StyledDarkParagraphText>
      {addSpace()}
      <StyledButton
        small
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "0 50px",
        }}
      >
        <ArrowBack />
        take me Back
      </StyledButton>
    </BaseModal>
  );
};

export const LogoutModal = () => {
  const [css] = useStyletron();
  return (
    <BaseModal showCloseIcon small>
      <StyledDarkParagraphText
        weight={500}
        style={{
          fontSize: "18px",
          letterSpacing: "0.4px",
          lineHeight: 1.5,
          marginTop: "20px",
        }}
        align="center"
      >
        Are you sure you want to log out?
      </StyledDarkParagraphText>
      <div
        className={css({
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "10px",
          marginTop: "10px",
        })}
      >
        <StyledButton>yes</StyledButton>
        <StyledButton
          style={{
            backgroundColor: "transparent",
            color: "rgba(180, 135, 63, 1)",
          }}
        >
          cancel
        </StyledButton>
      </div>
    </BaseModal>
  );
};

export const RunCSVModal = () => {
  const [css, theme] = useStyletron();
  return (
    <BaseModal showCloseIcon small>
      <StyledHeaderText
        size="30px"
        align="left"
        weight={700}
        className={css({
          margin: "30px 0 10px",
          letterSpacing: 0,
          color: theme.colors.primary,
          alignSelf: "start",
        })}
      >
        Select dates
      </StyledHeaderText>
      <div
        className={css({
          display: "flex",
          width: "100%",
          gap: "20px",
        })}
      >
        <StyledDateInput placeholder="from" />
        <StyledDateInput placeholder="to" />
      </div>
      <StyledButton
        style={{
          padding: "0 50px",
        }}
      >
        run .csv
      </StyledButton>
      {addSpace()}
    </BaseModal>
  );
};

export const RegInfoReview = () => {
  const [css] = useStyletron();
  return (
    <BaseModal large >
      <StyledDarkParagraphText size="22px" weight={600}>
        Please review your information
      </StyledDarkParagraphText>
      <div
        className={css({
          display: "flex",
          gap: "105px",
        })}
      >
        <div>
          <div style={{ marginTop: 30 }}>
            <StyledDarkParagraphText weight={700} size="20px">
              Firm/Institution Information
            </StyledDarkParagraphText>
            <StyledDarkParagraphText weight={400} size="14 px">
              Company Name: {"company Name"}
            </StyledDarkParagraphText>
          </div>
          <div style={{ marginTop: 30 }}>
            <StyledDarkParagraphText weight={700} size="20px">
              Billing Address
            </StyledDarkParagraphText>
            {[
              { country: "USA" },
              { "province/state": "New york" },
              {
                "company street address": "street number 123",
              },
              { city: "new york" },
              { "postal / ZIP code": 123455 },
            ]
              .map((i: any, idx, arr) => ({
                key: Object.keys(i)[0],
                value: i[Object.keys(i)[0]],
              }))
              .map((item) => (
                <div
                  className={css({
                    width: "100%",
                    marginTop: "10px",
                    padding: "15px 0",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#000",
                    ":not(:last-child)": {
                      borderBottom: "1px solid rgba(209, 208, 208, 1)",
                    },
                  })}
                >
                  {item.key}: {item.value}
                </div>
              ))}
          </div>
        </div>

        <div>
          <div style={{ marginTop: 30 }}>
            <StyledDarkParagraphText weight={700} size="20px">
              Access Coordinator(s)
            </StyledDarkParagraphText>
            {[
              { "Access Coordinator 1": "John Doe" },
              { email: "johndoe@gmail.com" },
            ]
              .map((i: any, idx, arr) => ({
                key: Object.keys(i)[0],
                value: i[Object.keys(i)[0]],
              }))
              .map((item) => (
                <div
                  className={css({
                    width: "100%",
                    marginTop: "10px",
                    padding: "15px 0",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#000",
                    borderBottom: "1px solid rgba(209, 208, 208, 1)",
                    textTransform: "capitalize",
                  })}
                >
                  {item.key}: {item.value}
                </div>
              ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <StyledDarkParagraphText weight={700} size="20px">
              Authorized User(s)
            </StyledDarkParagraphText>
            {[
              { "Access Coordinator 1": "John Doe" },
              { email: "johndoe@gmail.com" },
            ]
              .map((i: any, idx, arr) => ({
                key: Object.keys(i)[0],
                value: i[Object.keys(i)[0]],
              }))
              .map((item) => (
                <div
                  className={css({
                    width: "100%",
                    marginTop: "10px",
                    padding: "15px 0",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#000",
                    borderBottom: "1px solid rgba(209, 208, 208, 1)",
                    textTransform: "capitalize",
                  })}
                >
                  {item.key}: {item.value}
                </div>
              ))}
          </div>
        </div>
      </div>
      <StyledButton small style={{ alignSelf: "end", width: "200px" }}>
        verify
      </StyledButton>
    </BaseModal>
  );
};
