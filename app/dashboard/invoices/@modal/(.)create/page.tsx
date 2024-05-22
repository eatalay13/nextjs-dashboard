import { fetchCustomers } from '@/app/lib/data';
import Form from '@/app/ui/invoices/create-form';
import Modal from '@/app/ui/modal';

export default async function ModalPage() {
  const customers = await fetchCustomers();

  console.log('geldi..');
  return (
    <Modal>
      <main>
        <Form customers={customers} />
      </main>
    </Modal>
  );
}
