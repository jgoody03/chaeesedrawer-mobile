cat > App.js <<'EOF'
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#FFF7CC' }}>
      <Text style={{ color:'#111', fontSize:22, fontWeight:'bold' }}>
        Expo baseline OK ✅
      </Text>
    </View>
  );
}
EOF
