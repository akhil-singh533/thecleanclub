import { ref } from 'vue';
import { storeBay } from '@/api/baysApi';

export function storeBays() {

    const bay_name = ref('');
    const bay_number = ref('');
    const bay_status = ref('');

    const message = ref('');
    const loading = ref(false);

    const saveBay = async () => {
        loading.value = true;
        message.value = '';

        try {
            const response = await storeBay({
                bay_name: bay_name.value,
                bay_number: bay_number.value,
                bay_status: bay_status.value
            });

            message.value = response.data.message;

            // Form reset
            bay_name.value = '';
            bay_number.value = '';
            bay_status.value = '';

        } catch (error) {

            if (error.response) {
                message.value = error.response.data.message || 'Something went wrong';
            } else {
                message.value = 'Server connection failed';
            }

            console.error(error);

        } finally {
            loading.value = false;
        }
    };

    return {
        bay_name,
        bay_number,
        bay_status,
        message,
        loading,
        saveBay
    };
}