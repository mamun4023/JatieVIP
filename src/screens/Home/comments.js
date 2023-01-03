import { CommentCard, TopBackButton } from '@/components';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ms } from 'react-native-size-matters';

export default function Comments(){
    return(
        <View style = {styles.container}>
            <View style = {styles.headerContainer}> 
                <TopBackButton />
                <Text style = {styles.headTxt}> Commetnts </Text>
            </View>

            <View style = {styles.commentContainer}>
                
                <CommentCard 
                    name = "Tohid"
                    userName = "@tohd"
                    imageUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AvQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAEEBQYCBwj/xABAEAACAQMCAwQIAwUFCQAAAAABAgMABBEFIQYSQRMiMVEHFGFxgZGxwSMyoRVCktHhM1KCwvEXJENEcnOisvD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAiEQADAAICAgIDAQAAAAAAAAAAAQIDEQQSITETIkFRcTL/2gAMAwEAAhEDEQA/APW+lPmuAa6oBxT01LwoB6VNT0As0qalQD09NmsV6TeKToGlqLO4WK+MgaMsvMNvEHfb5UCNRrGs6foduLnVLlbeEtyhmBOTjONvdWN070vcP3dwsdzDc2UbZ/GnK4HvwSf9K8VuNR1LXbrmvryWUZJJkfIGTnr79q5NpZRMOectkbZ3A9xquy6k+m7PX9IvuyNnqVrL2v8AZhZQS39anM6g4LAE+AJr5bju7a2cPbsRIpzjofdW503jz1qyt7fUUmmmVgY5kY8y43XO+5+tNkOT2we2mqPp17BqFjBeWrh4ZkDo2MZBqRViosUqcUsUBzXNExXBG9AcGhtRSKGwoCO61HZMmpbCgld6Asa6phXWKAQpEZp6VANSNPTUA1PmlTdaAUjFY3YDJCkgV8m65fSajqt1eXGOeSUsQAN9/GvrCU5ifYHunY9dq+VNGtY77Wik69wSMzL0zmq09LZeFt6L/hPhY69ArSO0UI8Qo/Ma3dp6LdJdAHabPVuarLhq1htYUjiARei+FayFtvHasvdtm5wpRhZPRXpKuCjyBR+6xzn41iuKOFzw3qFvNau3YuSvNn8rV7m57u+PnWO4/tku9CnwO9GQ6nyINT2aZVymmWPou1aC/wCHUs0YdvZMY3A6gkkN8fsa2OK8i9B0ROqa1LzHCxRJyk+bMd/lXrwrUvRhr2IU9KlUkC6Vya7rkigOCKGwopFDYUAB6EfGjPQqAsFrqhrXdAPmm609MRQCzSpYpUAqal1pjQDjx2r5zks44OONbg00Hs0uJBFkflPN4Y9hz8q+iwa8V4lgNh6SL9mRUEpWRSvXIBP1rnlepO2BbsjxW1w7mLlv3nB/to5ggU+e/StfwbLqSXclpqEjsqplXaTmJqxs7q1a0SWRUdgO7lQT+tUmncUabHrc3rLtGSCBzL1FZTe1oDxBDqZ1BC4untubIWGcKW+ZHlUqGzuJbKYCOWOCSNlaKZubBxsQav7HWLS6tzIgLwBsF2THKfj09tGv7iL1djGQFx4jwFCDKeg20WOx1e8JJkknSMr5BVJ+rGvUBWY9HVolrw7GUG0pMhOPEsS30IHwrUVsn0edkWqaQ4pxTClVig9I0qVAMaC9FJ2oTUAF6CaM9BNATVNdihIdq7zQHdKmBpUA9I02aVAKmNLNI0AhXnHpd06OA6briBu07YW0393kIYg+/IxXpAqt4m0eLX9Cu9Nlbk7ZDyPjPI43U/PFRS2tFprq9ni93c39xplidMO7c8cu+MOv0BFSuH+E7e6DnUZrkSuvgsGSMkZIOdzjNZSw1C50e+e2nbvRysrKPAkbH54rRw6rdy80tjcdknkzmszXU3RU37LWbh3UdPiml0i4k5eQmVbhOTIA3wASCdqJe6s9poUduJRJc+rrzgb95vAVC1DiF7XRpbZpmkvJl775yFU9Bmu/Rpos3EOtevXR/wBxsZA7A/8AEkweVR7BjJ+FJjsyMmTqno9c0KyGnaPZ2mCDHEoYE9cDNTqR2pVqXhGFvY9KlTihAqVKlQHLChPRWOKCxoAT0I+NEagnxoCQjbURaBHRxQHa11XAroUAqelTdaAVI0qqdU4k0zTFBmmLsThVjGcmmy0y69FuKzPHnEp0DSJVs2X9pTRMYVxnkGN3x7PrVLe8W6hqTXMNirWccPKOZD33Y+3p8KxNy8kerNLetJOWbsmMrli3MNhk+ZU/rVHX4NMcZ6716M5rOmTXCrcLzGVhlmJ/MfOq20j1GGQLHE5ztgDIr0SCw5cQuuVxsanQ6MEYOEOM+VZ+7Xg61iW9mO0fhnUdYmVr4tHEdyOpr0PSPWeHNWsorLmGlrbyG5iHgcY73v3NWOl2yRJ4eHnUbU7iN7a4MDqZn/AjHv8AzH9KmW2w5lJnoKkMoZSGUjIYdRSxvWL0O7u7e0jWOchN+VDuo7xxt/Kp1jxjbEOuoRGB4pOzdkGVz9R4VoVJme+NcmnpUO3uYblQ0EiyAjPdNFGKsZ9Crk05rk0BwxzQmoj0FqAGxoR8a6c0FjvQEpKMtBFFU0AQU/WuBXYoB6peJuI7LQLVpZ27SblykCbsf5CriWRIYnllbljRSzHyA3NeNazFc6pNc6ncPhb1M+1F/dX+HfHsoWmWy/1DV9RvuzN5MkUbY/CXBXJ/T51TayXW40+H1rHOWLbAg9KtbdLY6fY3Aj53YxYZmzuCAdvhUXXBCdZjAtoiVtgfy9SSfOuU0u3k9DJjbxTpFfpbubdu1uyVmuVz3dxgZ8areIBzTxgO0spQnOc97mJU49+fnWk0SCBfVpI4VUvNK/mMAY8KBrtjbPqqwmIRia1kIMbFSpB6H41PZdyHjr4V/QXDl2Jb+O3lKss8xTAHeh6Anzyd/jXpCaHhcCQD3rXnWjWjw3Wm6lZRiX8JWnty+NwCDynzDdDXqtnKs0McsfNyuAwB6VEzLbOeb5JmWzPcSRnStPZoW7SU7lFXfl6n+lYe+vIrmd7lcolomEcDHMx8ceXy6Y8a3nFMV2t3DcW8irC6dlIWGeTxIYfMjNYHVtNRJrxDcy8nKjukZ2kY5GSTvncZq0pTRD3eNM0UbzRrGq3uMIAAEwPljeqLU5JU1e+U3hzLEj4GFGSAc4I9lae2trQwwt2AJaJT3iT0FU+rwQQ6yoS3jxLZ7ZGdwT/Soi12O2bFbiWE0nUJTpdpKL3vhAuSFPgSPZWp0ziTs5YYNSdeWZuSOceHN0U//dKzmivGNFj/AAoSYpmRu4PMYNR+IIFae0itWCMWMkkbHukYx8OtE12K3ifwJteT1HFMaqeGZ3fS44JmUzQKqNg52xt9x8KtCa6GClp6BSHehMaI5oDmhAKU+VBPtojmgk+zFATRRUqNG2etHU0AWus1wDtT0BQceXTQcNzxRZEt46WqYPVzgn+HJrGgo8F8qYCxzKBnovKF+lXXpCu2/aWiWcTfiBpbkjGchV5R/wC/6Vk475Bp+sicrFMBgDoc7CuWRNtaPR4jmcdOibpEvLYpDORGLe+Ze8fDKlgPntQdTvLeTVbqQXMWIUVAcnxAx9zVfaN2esusshkRkV18tgR5Heq+WeOaC6kWJi005xhR1JA6VaZXZnPJnrol+tmv0ea0iSxRrgbW5Y4U7FmzUbiG5ha/spYriImKFy2/RsiuoWWO7cLbuUVVjB5D0HvxVTqLwS6tIjIQFs/LHQny9tREp1s65clTilGgtFki0+GW2h7XvuFKEEEE/TpW80VibO3yACYwSAc79a8t0bsjpUDJIeZXdCA2Ovvr0bhAr+zLXsySuJAM/wDWf50mdUznmt1gnZxxbOwSCCFeZmcE5PgPDP61iNQjZ7nUMAkdkmD7MrWn4rlnXUYTDN2Y7I5/LueY+ZrDX3NLq0/rFwTzwjPe8e6T7ug61Kndk/J048pGwsJov2dau88S5hX97yGPtVXxFc2sd1p9x6zGeXmG2/UGoGhzWp0i0xuwDL8mPvpa60TWcEgichZwCQvQjH2qJlKy95aeFMl6VdWa2t5ALlQFuFIJBAGf9KaK7SfXBPLlo2kEKe4Aj6g/pVXFcRr24MLKhmycr7D76Gl/EHteUPM63vXuhe+Bip6/Z6I+ZzjXZm+0C8MOtJE7YW5Rk/xLuP8ANWsNeV3Go3kLW15yqvYXKsFC4yO9tXqIcPGrocqwBB8waR/kz8rTyNo5kNR3NFegOauZgMnjQScneiPQj40AWJ/bUhH9tVkbmpKSGgLFWzXQNRY3NGVqA8z4xlW89IccXaFPV7QRg+OCTzH61mtWVrae6trvla3uJFBZT4AZ+VWGuzH/AGh3knUXHJ8BGKBxZhWVsbtMori39kenixS+PTBcOkRcTzhJOfltd1ZfynIH2pWlw/Paxhhg3Z6DoQfvXXDoE3EF86qqHsRkDw/Mc1Hthy3VsSfy3zjYe0Vbe6Zzamccp+/JtbS5ke4uH7RsGQ9dqrb+fGs3I7pxGgOVH900XTjlWHOe8c+FQbpGk1jUHBGQevl4feuePezVyaxvqiw0VLd9JhLW8Ry7HIGPKtzwy0a6fGI1CqpfAHTfNed2QuE0e2S3dVfJJJ8Mcwrc8PFotEDE5bvb+e5H2q0P7nHPMrjLSIHE8Mc99bmRpR+D+5jw5jWSubW1TVv7PtC0GcufhWm4rz63bAEgi3Ug/wCI1ktQkI1eH/sj496m2rZLxy+PLZccOXMaWk0KQonZ3DAcq9Kl6vK8+mTIjYZQJBnGO7uapdADNbX0vNgLOuw9x/nUrUnkFndrzjIt2IPL0xVab7mjHEPA/Ho506+Wb1hMtkhX3A8CMfY1Q3gn5rh40WNEusiRtupP2q10S3/BklDkFuQHA6BR/M1S6gxaO9Qn/mQM/wAQ+9Xl6pnDJKvDKLu7t1GkrI87Elomwo2GWFejcJTGfhnT2Zy7JGYmY+JKEr/lrzvVTyaZKg/daMf+Qraej6Tm4fdP7l1Lj4nP3qcb2jPzMamvBoZKjP41IlNRWO9dDEBkNCJoj1HdsGgP/9k="
                    time = {10}
                    commentTxt = "Wonderful post"
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
    },
    headerContainer : {
        flexDirection : 'row', 
        alignItems : 'center'
    },
    headTxt : [
        TextStyles.header, {
            color : theme.light.colors.black,
            fontSize : ms(20)
        }
    ],
    commentContainer : {
        flex : 1
    }                 
})