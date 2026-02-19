import React from "react";

const HijriDateDisplay = ({ date }: { date: string }) => {
  return <p className="text-sm text-muted-foreground">{date}</p>;
};

export default React.memo(HijriDateDisplay);
