import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { SelectedBrownies } from "./components/SelectedBrownies";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return <CompleteOrderContainer className="container">
    <CompleteOrderForm />
    <SelectedBrownies />
  </CompleteOrderContainer>
}