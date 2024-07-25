public class Max{
    public static int maxSubarray(int[] nums){
        int left = 0 , right=0;
        int max = 0;
        int cz = 0;
        while(right < nums.length){
            if(nums[right] == 0){
                cz++;
            }
            while(cz>1){
                if(nums[left] == 0)
                    cz--;
                left++;
            }
            max = Math.max(max , right - left);

            right++;

        }
        return max;
    }
    public static void main(String[] args) {
        int[] arr = {0,1,1,1,0,1,1,1,0,1};
        System.out.println(maxSubarray(arr));
    }
}