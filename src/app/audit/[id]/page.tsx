// src/app/audit/[id]/page.tsx
import React from "react";

const AuditPage = ({ params }: { params: { id: string } }) => {
  return <div>Audit Page for ID: {params.id}</div>;
};

export default AuditPage;
