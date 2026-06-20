import aj from '../Lib/Arcjet.js';
import { isSpoofedBot } from '@arcjet/inspect'; 

const ajprotect = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ message: "Rate limit exceeded" });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ message: "Bot access denied" });
      } else {
        return res.status(403).json({ message: "Access denied by security policy" });
      }
    }

    if (decision.results.some(isSpoofedBot)) {
      return res.status(403).json({ message: "Bot activity found" });
    }

    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
    next();
  }
  next();
};

export default ajprotect;
