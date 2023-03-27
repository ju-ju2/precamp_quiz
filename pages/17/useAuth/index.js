import useAuth from "@/src/components/commons/hooks/useAuth";

export default function useAuthMainPage() {
  useAuth();
  return <div>메인페이지</div>;
}
