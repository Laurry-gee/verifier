import React from "react";
import { Box, styled } from "@mui/system";

enum NotificationType {
  ERROR = "Error",
  HINT = "Hint",
  SUCCESS = "Success",
  NOTIFICATION = "Notification",
}

interface NotificationBoxProps {
  borderColor?: string;
  backgroundColor?: string;
}

const NotificationBox = styled(Box)(({ theme }) => (props: NotificationBoxProps) => ({
  background: props.backgroundColor || "",
  border: `1px solid ${props.borderColor || "#D8D8D8"}`,
  borderRadius: 12,
}));

interface CompilationNotificationProps {
  type: NotificationType;
  title: React.ReactNode;
  notificationBody: React.ReactNode;
}

export function CompilationNotification({
  title,
  type,
  notificationBody,
}: CompilationNotificationProps) {
  let borderColor;
  let backgroundColor;

  switch (type) {
    case NotificationType.NOTIFICATION:
      backgroundColor = "rgba(216, 216, 216, 0.2);";
      break;
    case NotificationType.ERROR:
      borderColor = "rgba(252, 86, 86, 0.42);";
      backgroundColor = "rgba(252, 86, 86, 0.08);";
      break;
    case NotificationType.HINT:
      backgroundColor = "rgba(94, 117, 232, 0.1);";
      break;
    case NotificationType.SUCCESS:
      backgroundColor = "#D6FFCE";
      break;
  }

  return (
    <NotificationBox borderColor={borderColor} backgroundColor={backgroundColor}>
      {title}
      {notificationBody}
    </NotificationBox>
  );
}
