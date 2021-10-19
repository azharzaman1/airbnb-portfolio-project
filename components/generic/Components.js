import React from "react";
import { Button, buttonGroupClasses, useTheme } from "@mui/material";

export const ThemeButton = ({
  children,
  disableRipple = true,
  textTransform,
  margin,
  icon,
  type = "primary",
  size,
  styling,
  className,
  iconButton,
  ...rest
}) => {
  const muiTheme = useTheme();

  return (
    <Button
      startIcon={icon}
      variant={type === "tertiary" ? "text" : "contained"}
      disableRipple={disableRipple}
      className={`button ${type === "primary" && "btn--primary"} ${
        type === "secondary" && "btn--secondary"
      } ${type === "tertiary" && "btn--tertiary"} ${className}`}
      style={{
        textTransform: textTransform ? textTransform : "inherit",
        margin: margin,
        color: type === "tertiary" && muiTheme.palette.primary.contrastText,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const TWButton = ({
  type = "primary",
  children,
  color,
  bg,
  className,
}) => {
  if (type === "primary") {
    return (
      <button
        className={`text-lg ${color ? `text-[${color}]` : `text-purple-500`} ${
          bg ? `bg-[${bg}]` : `bg-white`
        } px-14 py-4 shadow-md rounded-full font-bold transition duration-200 hover:shadow-lg active:scale-90 ${className}`}
      >
        {children}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        className={`text-md px-8 py-3 font-bold rounded-lg ${
          color ? `text-[${color}]` : `text-purple-500`
        } ${bg ? `bg-[${bg}]` : `bg-white`} ${className}`}
      >
        {children}
      </button>
    );
  }
};

export const TWHeading = ({
  type = "primary",
  className,
  children,
  color,
  ...rest
}) => {
  if (type === "primary") {
    return (
      <h1
        className={`heading font-main font-bold text-[32px] mb-6 ${className}`}
        {...rest}
      >
        {children}
      </h1>
    );
  } else if (type === "secondary") {
    return (
      <h2
        className={`heading font-main font-semibold text-[30px] md:text-[40px] lg:text-[48px] xl:text-[55px] 2xl:text-[70px] ${className}`}
        {...rest}
      >
        {children}
      </h2>
    );
  } else {
    return (
      <h3
        className={`heading font-main font-medium text-[22px] ${className}`}
        {...rest}
      >
        {children}
      </h3>
    );
  }
};

export const TWText = ({ bold, semibold, children, className }) => {
  return (
    <p
      className={`text text-[16px] font-${
        bold ? "bold" : semibold ? "semibold" : "normal"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export const TWLink = ({
  bold,
  semibold,
  href,
  className,
  color = "rgb(34, 34, 34)",
  children,
}) => {
  return (
    <a
      href={href}
      className={`link hover:underline text-[${color}] cursor-pointer text-[14px] font-${
        bold ? "bold" : semibold ? "semibold" : "normal"
      } ${className}`}
    >
      {children}
    </a>
  );
};

// export const ThemeLink = ({
//   children,
//   type = "internal",
//   to,
//   className,
//   margin,
//   newTab = true,
//   inherit,
//   ...rest
// }) => {
//   const theme = useSelector(selectTheme);

//   if (type === "internal") {
//     return (
//       <span
//         className={`link ${className} link-internal ${inherit && "inherit"} ${
//           theme === "dark" && "dark"
//         }`}
//         style={{ margin: margin }}
//       >
//         <Link href={to} {...rest}>
//           {children}
//         </Link>
//       </span>
//     );
//   } else if (type === "external") {
//     return (
//       <a
//         className={`link ${className} external-link ${inherit && "inherit"} ${
//           theme === "dark" && "dark"
//         }`}
//         href={to}
//         style={{ margin: margin }}
//         target={newTab && "_blank"}
//         {...rest}
//       >
//         {children}
//       </a>
//     );
//   } else if (type === "action") {
//     return (
//       <span
//         className={`link ${className} link-internal ${inherit && "inherit"} ${
//           theme === "dark" && "dark"
//         }`}
//         style={{ margin: margin }}
//         {...rest}
//       >
//         {children}
//       </span>
//     );
//   } else {
//     return null;
//   }
// };

// export const ThemeText = ({
//   children,
//   type = "text",
//   color,
//   margin,
//   maxWidth,
//   className,
//   lhNormal,
//   responsive = false,
//   ...rest
// }) => {
//   const theme = useSelector(selectTheme);
//   return (
//     <p
//       className={`${className} text ${type === "text" && "theme--text"} ${
//         type === "info" && "theme--infotext"
//       } ${responsive && "responsive"} ${theme === "dark" && "dark"}`}
//       style={{
//         maxWidth: maxWidth,
//         margin: margin,
//         color: color,
//         lineHeight: lhNormal && "normal",
//       }}
//       {...rest}
//     >
//       {children}
//     </p>
//   );
// };

// export const ThemeHeading = ({
//   children,
//   type = "primary",
//   color,
//   size,
//   className,
//   margin,
//   lsNormal,
//   bottomBordered = false,
//   centered = false,
//   responsive = false,
//   ...rest
// }) => {
//   const theme = useSelector(selectTheme);
//   const muiTheme = useTheme();
//   return (
//     <h2
//       className={`heading ${className} ${
//         type === "primary" && "heading--primary"
//       } ${type === "secondary" && "heading--secondary"} ${
//         type === "text" && "heading--text"
//       } ${responsive && "responsive"} ${theme === "dark" && "dark"}`}
//       style={{
//         margin: margin,
//         fontSize: size,
//         letterSpacing: lsNormal && "normal",
//         textAlign: centered ? "center" : "initial",
//         borderBottom: bottomBordered && `1px solid ${muiTheme.palette.divider}`,
//         paddingBottom: bottomBordered && "10px",
//       }}
//       {...rest}
//     >
//       {children}
//     </h2>
//   );
// };

// ......... //
// ......... //
// ......... //

export const Spacer = ({ height }) => {
  return (
    <div
      className="spacer"
      style={{
        height: height ? height : "10px",
      }}
    />
  );
};

// ......... //
// ......... //
// ......... //

// export const PageLoadingSpinner = ({
//   show,
//   type = "dots",
//   description,
//   descriptionSize,
//   descriptionPosition = "below",
//   descriptionMargin,
//   position = "abs-center",
//   color,
// }) => {
//   const loaderColor = color ? color : "lightgray";
//   const theme = useDispatch(selectTheme);

//   return (
//     <>
//       {show && (
//         <div
//           className={`loader--container ${
//             position === "abs-center" && "loader--absolute--center"
//           }`}
//         >
//           {type === "ring" && (
//             <Grid
//               container
//               direction={descriptionPosition === "rightSide" ? "row" : "column"}
//               alignItems="center"
//               justifyContent="flex-start"
//             >
//               {descriptionPosition === "above" && (
//                 <Grid item>
//                   <ThemeHeading
//                     size={descriptionSize}
//                     type="secondary"
//                     className={theme === "dark" && "dark"}
//                     lsNormal
//                   >
//                     {description}
//                   </ThemeHeading>
//                 </Grid>
//               )}
//               <Grid item>
//                 <div className={`loader--ring`}>
//                   <div
//                     style={{
//                       borderColor: `${loaderColor} transparent transparent transparent`,
//                     }}
//                   ></div>
//                   <div
//                     style={{
//                       borderColor: `${loaderColor} transparent transparent transparent`,
//                     }}
//                   ></div>
//                   <div
//                     style={{
//                       borderColor: `${loaderColor} transparent transparent transparent`,
//                     }}
//                   ></div>
//                   <div
//                     style={{
//                       borderColor: `${loaderColor} transparent transparent transparent`,
//                     }}
//                   ></div>
//                 </div>
//               </Grid>
//               {descriptionPosition === "below" ||
//               descriptionPosition === "rightSide" ? (
//                 <Grid item>
//                   <ThemeHeading
//                     size={descriptionSize}
//                     type="secondary"
//                     className={theme === "dark" && "dark"}
//                     margin={descriptionMargin}
//                     lsNormal
//                   >
//                     {description}
//                   </ThemeHeading>
//                 </Grid>
//               ) : (
//                 <></>
//               )}
//             </Grid>
//           )}

//           {type === "dots" && (
//             <Grid
//               container
//               direction={descriptionPosition === "rightSide" ? "row" : "column"}
//               alignItems="center"
//               justifyContent={
//                 descriptionPosition === "rightSide" ? "center" : "flex-start"
//               }
//             >
//               {descriptionPosition === "above" && (
//                 <Grid item>
//                   <ThemeHeading
//                     size={descriptionSize}
//                     type="secondary"
//                     className={theme === "dark" && "dark"}
//                     lsNormal
//                   >
//                     {description}
//                   </ThemeHeading>
//                 </Grid>
//               )}
//               <Grid item>
//                 <div className="loader--dots">
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                   <div style={{ backgroundColor: loaderColor }}></div>
//                 </div>
//               </Grid>
//               {descriptionPosition === "below" ||
//               descriptionPosition === "rightSide" ? (
//                 <Grid item>
//                   <ThemeHeading
//                     size={descriptionSize}
//                     type="secondary"
//                     className={theme === "dark" && "dark"}
//                     margin={descriptionMargin}
//                     lsNormal
//                   >
//                     {description}
//                   </ThemeHeading>
//                 </Grid>
//               ) : (
//                 <></>
//               )}
//             </Grid>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export const AntdDialogue = ({
//   visible,
//   confirmHandler,
//   cancelHandler,
//   title,
//   children,
//   negativeActionLabel,
//   postiveActionLabel,
// }) => {
//   return (
//     <Modal
//       title={title}
//       visible={visible}
//       onOk={confirmHandler}
//       onCancel={cancelHandler}
//       footer={[
//         <AntDButton key="back" onClick={cancelHandler}>
//           {negativeActionLabel ? negativeActionLabel : "Cancel"}
//         </AntDButton>,
//         <AntDButton
//           key="submit"
//           type="primary"
//           loading={false}
//           onClick={confirmHandler}
//         >
//           {postiveActionLabel ? postiveActionLabel : "Confirm"}
//         </AntDButton>,
//       ]}
//     >
//       {children}
//     </Modal>
//   );
// };

// export const MuiDialogue = ({
//   visible,
//   fullScreen,
//   confirmHandler,
//   cancelHandler,
//   handleClose,
//   title,
//   children,
//   negativeActionLabel,
//   postiveActionLabel,
//   loading,
// }) => {
//   return (
//     <Dialog
//       fullScreen={fullScreen}
//       open={visible}
//       onClose={handleClose}
//       aria-labelledby="responsive-dialog-title"
//       style={{ zIndex: 5 }}
//     >
//       <DialogTitle id="responsive-dialog-title">
//         <ThemeHeading type="secondary">{title}</ThemeHeading>
//       </DialogTitle>
//       <DialogContent style={{ maxWidth: "96%", margin: "0 auto" }}>
//         {children}
//       </DialogContent>
//       <DialogActions style={{ marginTop: "1rem" }}>
//         <Button autoFocus onClick={cancelHandler}>
//           {negativeActionLabel ? negativeActionLabel : "Cancel"}
//         </Button>
//         <LoadingButton
//           loading={loading}
//           onClick={confirmHandler}
//           autoFocus
//           variant="contained"
//           color="primary"
//         >
//           {postiveActionLabel ? postiveActionLabel : "Confirm"}
//         </LoadingButton>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export const NoData = ({ onClick, buttonText, desc, imgUrl }) => {
//   return (
//     <Empty
//       image={
//         imgUrl
//           ? imgUrl
//           : "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
//       }
//       imageStyle={{
//         height: 60,
//       }}
//       description={<span>{desc}</span>}
//     >
//       {buttonText && (
//         <Button color="primary" variant="contained" onClick={onClick}>
//           {buttonText}
//         </Button>
//       )}
//     </Empty>
//   );
// };
