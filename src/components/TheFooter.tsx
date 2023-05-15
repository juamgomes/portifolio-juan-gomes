export function TheFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-main py-10">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {currentYear} Juan Gomes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

